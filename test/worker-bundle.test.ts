import { expect } from 'chai';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Worker } from 'node:worker_threads';

let testDir;

if (globalThis.__dirname) {
  testDir = globalThis.__dirname;
} else {
  testDir = path.dirname(fileURLToPath(import.meta.url));
}

const repoRoot = path.join(testDir, '..');
const esmWorkerPath = path.join(repoRoot, 'esm/chargebee.esm.worker.js');

const hasBuiltEsmWorker = fs.existsSync(esmWorkerPath);

function describeIfEsmBuilt(title: string, fn: () => void): void {
  if (hasBuiltEsmWorker) {
    describe(title, fn);
    return;
  }
  describe.skip(
    `${title} (skipped: run \`npm run build\` or \`npm run test:worker-bundle\`)`,
    fn,
  );
}

const REQUIRED_VALUE_EXPORTS = [
  'WebhookEventType',
  'WebhookContentType',
  'basicAuthValidator',
  'WebhookError',
  'WebhookAuthenticationError',
  'WebhookPayloadValidationError',
  'WebhookPayloadParseError',
] as const;

function assertWebhookExports(mod: Record<string, unknown>, label: string): void {
  for (const name of REQUIRED_VALUE_EXPORTS) {
    expect(mod, `${label} must export ${name}`).to.have.property(name);
    expect(mod[name], `${label}.${name}`).to.not.equal(undefined);
  }

  expect(mod.default, `${label} default export`).to.be.a('function');
  expect(mod.WebhookEventType, `${label}.WebhookEventType`).to.be.an('object');
  expect(mod.WebhookContentType, `${label}.WebhookContentType`).to.equal(mod.WebhookEventType);
  expect(mod.basicAuthValidator, `${label}.basicAuthValidator`).to.be.a('function');

  const Err = mod.WebhookError as typeof Error;
  expect(new Err('x')).to.be.instanceof(Error);
  expect((new Err('x') as Error).name).to.equal('WebhookError');

  const AuthErr = mod.WebhookAuthenticationError as typeof Error;
  expect(new AuthErr('a')).to.be.instanceof(Err);

  const ValErr = mod.WebhookPayloadValidationError as typeof Error;
  expect(new ValErr('v')).to.be.instanceof(Err);

  const ParseErr = mod.WebhookPayloadParseError as typeof Error;
  expect(new ParseErr('p')).to.be.instanceof(Err);
}

describeIfEsmBuilt('Worker entry bundle (ESM)', () => {
  it('exposes webhook value exports from built ESM worker entry', async function () {
    const mod = (await import(pathToFileURL(esmWorkerPath).href)) as Record<string, unknown>;
    assertWebhookExports(mod, 'esm/chargebee.esm.worker.js');
  });
});

describeIfEsmBuilt('Worker thread can load ESM worker bundle', () => {
  it('parses the bundle and receives all webhook exports inside a worker', function (done) {
    const fixture = path.join(testDir, 'fixtures', 'load-esm-worker-bundle.mjs');
    const worker = new Worker(fixture, {
      workerData: { root: repoRoot },
      type: 'module',
    });
    let settled = false;
    const finish = (err?: Error): void => {
      if (settled) {
        return;
      }
      settled = true;
      void worker.terminate().finally(() => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
    };
    worker.on('message', (msg: { ok: boolean; error?: string; missing?: string[]; stack?: string }) => {
      try {
        expect(msg.ok, JSON.stringify(msg)).to.be.true;
        finish();
      } catch (e) {
        finish(e as Error);
      }
    });
    worker.on('error', finish);
    worker.on('exit', (code) => {
      if (settled) {
        return;
      }
      if (code !== 0) {
        finish(new Error(`worker exited with code ${code}`));
      }
    });
  });
});
