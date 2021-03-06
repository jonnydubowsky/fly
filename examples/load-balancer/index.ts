import proxy from "@fly/proxy"
import balancer from "./src/balancer"

const backends = [
  proxy("https://example.com"),
  proxy("https://example.org")
]

declare var fly: any
fly.http.respondWith(balancer(backends))