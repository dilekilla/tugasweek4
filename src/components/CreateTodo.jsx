"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const CreateTodo = () => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleCreateTodo() {
      setLoading(true)
        const res = await fetch("https://v1.appbackend.io/v1/rows/MEIxoqqUyCLD", {
            method: "POST",
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify([{title,content,isdone:"false"}])
        });
        const data = await res.json();
       
        router.refresh();
        setLoading(false);
        toast.success("Todo berhasil dibuat");
        setTitle("");
        setContent("");
    }

  return (
    <main className="max-w-xl m-auto space-y-2">
        <h3 className="font-bold text-lg">Daily ToDoList</h3>
        <input placeholder="Title" value={title} onChange = {(e) => setTitle(e.target.value)}/>
        <textarea placeholder="Content" value={content} onChange = {(e) => setContent(e.target.value)}></textarea>
        <button disabled={loading} onClick ={handleCreateTodo} className="btn btn-neutral">Create</button>
    </main>
  )
}
