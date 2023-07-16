build:
	docker build -t rahadiangg/demo-istio:dashboard-svc-1.0.0 .

run:
	docker run --rm -p 3000:3000 rahadiangg/demo-istio:dashboard-svc-1.0.0

build-and-push-all:
	docker buildx build -t rahadiangg/demo-istio:dashboard-svc-1.0.0 --platform=linux/arm64,linux/amd64 --push .