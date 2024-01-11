import React, { useRef } from "preact/compat";

export default function CompTicker() {
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = formRef.current.action;
    const data = new FormData(event.target);
    data.set("ticker", "CAC.PA"); //ticker.value);

    fetch(target, {
      method: "POST",
      body: data,
    });
  };

  return (
    <>
      <form
        method="post"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <button
          type="submit"
          className="box-border w-full text-primary shadow-gray-700 hover:bg-green-100 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
        >
          Submit in Island : Render doesn't work
        </button>
      </form>
    </>
  );
}
