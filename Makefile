.PHONY: update-version increment-major increment-minor increment-patch test format build prepack

update-version:
	@echo "$(VERSION)" > VERSION
	@perl -pi -e 's|"version": "[.\-\d\w]+"|"version": "$(VERSION)"|' package.json
	@awk -v version="$(VERSION)" '{if (!done && /"version":/) {sub(/"version": "[^"]*"/, "\"version\": \"" version "\""); count++; if (count==2) done=1}} 1' package-lock.json > package-lock.json.tmp && mv package-lock.json.tmp package-lock.json
	@perl -pi -e "s|clientVersion: 'v[.\-\d\w]+'|clientVersion: 'v$(VERSION)'|" src/environment.ts

increment-major:
	$(eval CURRENT := $(shell cat VERSION))
	$(eval MAJOR := $(shell echo $(CURRENT) | cut -d. -f1))
	$(eval NEW_VERSION := $(shell echo $$(($(MAJOR) + 1)).0.0))
	@$(MAKE) update-version VERSION=$(NEW_VERSION)
	@echo "Version bumped from $(CURRENT) to $(NEW_VERSION)"

increment-minor:
	$(eval CURRENT := $(shell cat VERSION))
	$(eval MAJOR := $(shell echo $(CURRENT) | cut -d. -f1))
	$(eval MINOR := $(shell echo $(CURRENT) | cut -d. -f2))
	$(eval NEW_VERSION := $(MAJOR).$(shell echo $$(($(MINOR) + 1))).0)
	@$(MAKE) update-version VERSION=$(NEW_VERSION)
	@echo "Version bumped from $(CURRENT) to $(NEW_VERSION)"

increment-patch:
	$(eval CURRENT := $(shell cat VERSION))
	$(eval MAJOR := $(shell echo $(CURRENT) | cut -d. -f1))
	$(eval MINOR := $(shell echo $(CURRENT) | cut -d. -f2))
	$(eval PATCH := $(shell echo $(CURRENT) | cut -d. -f3))
	$(eval NEW_VERSION := $(MAJOR).$(MINOR).$(shell echo $$(($(PATCH) + 1))))
	@$(MAKE) update-version VERSION=$(NEW_VERSION)
	@echo "Version bumped from $(CURRENT) to $(NEW_VERSION)"

test:
	@echo "Test is not written currently for this module."

format:
	npm run prettier

build: install 
	npm run build

prepack:
	npm run prepack

install: 
	npm install