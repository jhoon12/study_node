import React from "react";
import * as S from "./style";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface ToDoInterface {
  todo: string;
  todoID: number;
  isDone: boolean;
}
interface EditInterface {
  todo: string;
  id: number;
}

function App() {
  const [todo, setToDo] = useState<ToDoInterface[]>([]);
  const [input, setInput] = useState<string>("");
  const [socket, setSocket] = useState<boolean>(false);
  const [editState, setEditState] = useState<EditInterface>({
    todo: "",
    id: 0,
  });
  useEffect(() => {
    try {
      (async () => {
        const { data }: { data: ToDoInterface[] } = await axios.get(
          "http://10.156.145.168/board"
        );
        setToDo(data);
        setSocket(false);
      })();
    } catch (err) {
      console.log(err);
    }
  }, [socket]); //todo 넣으면 무한루프
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const addToDo = async () => {
    try {
      setInput("");
      const res = await axios.post("http://10.156.145.168/board/todo", {
        todo: input,
        isDone: false,
      });
      setSocket(true);
    } catch (err) {}
  };
  const removeToDo = async (id: number) => {
    try {
      const res = await axios.delete("http://10.156.145.168/board/delete", {
        data: {
          id: id,
        },
      });
      setSocket(true);
    } catch (err) {}
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post("http://10.156.145.168/board/edit", {
          todo: editState.todo,
          id: editState.id,
        });
        setSocket(true);
      } catch (err) {}
    })();
  }, [editState]);
  const editToDo = async (id: number) => {
    setEditState({ todo: prompt("변경할 값", "") as string, id: id });
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
            return (
              <S.FlexToDo>
                <li>{ele.todo}</li>
                <button onClick={() => removeToDo(ele.todoID)}>삭제</button>
                <button onClick={() => editToDo(ele.todoID)}>수정</button>
              </S.FlexToDo>
            );
          })}
        </ul>
      </S.MainBox>
    </>
  );
}

export default App;
