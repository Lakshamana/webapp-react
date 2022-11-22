import { check } from "k6";
import http from "k6/http";

const BASE_URL = "http://localhost:3004/";
// const BASE_URL = "https://v3-stage.fanheroapi.com/login";

export function setup() {
  // setup code
  return {};
}

export default function () {
  let res = http.get(
    BASE_URL,
    {
      headers: {
        "Content-Type": "application/json",
        Application: "5c926da8e117d200047d500e",
        "fastly-client-ip": "2804:18:5804:216a:1937:7405:80fe:5760",
      },
    }
  );
  check(res, {
    "Status is 200": (r) => r.status == 200,
  });
}

export function teardown(data) {
  console.log(data);
}