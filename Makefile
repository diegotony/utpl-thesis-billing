IMAGE := diegotony/billing-micro:k8s

test:
	true

image:
	docker build -t $(IMAGE) .

push-image:
	docker push $(IMAGE)


.PHONY: image push-image test
