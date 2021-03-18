import React from "react";
import * as S from "./style";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface ToDoInterface {
  todo: string;
  todoID: number;
  isDone: boolean;
}

function App() {
  const [todo, setToDo] = useState<ToDoInterface[]>([]);
  const [input, setInput] = useState<string>("");
  useEffect(() => {
    try {
      (async () => {
        const { data }: { data: ToDoInterface[] } = await axios.get(
          "http://10.156.145.168/board"
        );
        setToDo(data);
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const addToDo = async () => {
    try {
      const res = await axios.post("http://10.156.145.168/board/todo", {
        todo: input,
        isDone: false,
      });
    } catch (err) {}
  };
  return (
    <>
      <S.GlobalStyle />
      <S.Title>To Do List</S.Title>
      <S.MainBox>
        <S.InputBox>
          <S.Input onChange={changeInput} value={input} />
          <S.Btn onClick={addToDo}>추가하기</S.Btn>
        </S.InputBox>
        <ul>
          {todo.map((ele) => {
            return <li>{ele.todo}</li>;
          })}
        </ul>
      </S.MainBox>
    </>
  );
}

export default App;
