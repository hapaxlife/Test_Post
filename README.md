When I submit a form from an Island, the handler POST doesn't render the page.



// routes/test.tsx
export const handler: Handlers = {
  async GET(_req, ctx) {
    return ctx.render({
      method: "GET",
    });
  },
  async POST(req, ctx) {
      return ctx.render({
        method: "POST",
      });
    }
  }

  //
  export default function ChartPricePage(props: PageProps) {
    console.log(props.data.method);
    // log GET and POST 
    
    // If POST send from code in route, OK
    // If POST send from code in an island, => don't render
  return (
    <>
    Method : {method} => always GET print if form send from island
    </>
  )
  }
