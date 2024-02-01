import { CreateTodo } from "@/components/CreateTodo";
import { TodoList } from "@/components/TodoList";

// export const dynamic = "force-dynamic"


async function getData() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/MEIxoqqUyCLD", {
    cache: "no-store", });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getData();
  console.log(data);

  return (
    <main className="max-w-xl m-auto space-y-12 py-6">
      <CreateTodo/>
      <TodoList data={data} />
    </main>
  );
}
