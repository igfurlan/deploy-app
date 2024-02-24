import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: "20s", target: 25 },
    { duration: "30s", target: 50 },
    { duration: "10s", target: 0 },
  ],
};

export default function () {
  const pages = [
    "/empresas",
    "/empresa/3",
    "/empresa/4",
  ]
  for (const page of pages) {
    const res = http.get("http://localhost:3000" + page);
    check(res, {
      "status was 200": (r) => r.status == 200,
      "duration was <= ": (r) => r.timings.duration <= 200
    });
    sleep(1);
  }
}