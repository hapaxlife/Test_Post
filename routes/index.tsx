// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import type { Handlers, PageProps } from "$fresh/server.ts";
import Chart from "@/islands/Chart.tsx";
import { Partial } from "$fresh/runtime.ts";
import FakeForm from "@/islands/FakeForm.tsx"

export const handler: Handlers = {
  GET(_req, ctx) {
    const t = {
      label: "ticker1",
      serie: [
        { date: new Date("2023-01-10"), close: 67.67 },
        { date: new Date("2023-01-11"), close: 78.67 },
      ],
    };

    console.log("HANDLER GET");
    return ctx.render({
      method: "GET",
      data: t,
    });
  },
  POST(req, ctx) {
    const t = {
      label: "ticker2",
      serie: [
        { date: new Date("2023-01-10"), close: 67.67 },
        { date: new Date("2023-01-11"), close: 78.67 },
        { date: new Date("2023-01-12"), close: 80.67 },
      ],
    };

    console.log("HANDLER POST");
    return ctx.render({
      method: "POST",
      data: t,
    });
  },
};

export default function ChartPricePage(props: PageProps) {
  const method = props.data.method;
  const serie = props.data.data.serie;

  console.log(method);
  return (
    <>
      <h1>Method : {method}</h1>
      <FakeForm></FakeForm>
      <form method="post">
        <button type="submit"
        className="box-border w-full text-primary shadow-gray-700 hover:bg-green-100 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          Submit in Route : Render work
        </button>
      </form>
      <div class="p-4 mx-auto max-w-screen-md">
      <Partial name="perf">
        <Chart
          type="line"
          options={{
            devicePixelRatio: 1,
            scales: { y: { beginAtZero: true } },
          }}
          data={{
            labels: serie.map((x) => x.date),
            datasets:[ {
              label: method,
              data: serie.map((x) => x.close),
            },]
          }}
        />
         </Partial>
      </div>
    </>
  );
}
