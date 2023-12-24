import React, { useState, useEffect, useContext } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../Hooks/Authcontext";

export default function KanbanBoard() {
    const {user}=useContext(AuthContext)
  const [done, setdone] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [todo, setTodo] = useState([]);
  const axiosPublic=useAxiosPublic()

  useEffect(() => {
    // fetch("data.json")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setdone(json.filter((task) => task.status==="done"));
    //     setOngoing(json.filter((task) => task.status==="ongoing"));
    //     setTodo(json.filter((task) => task.status==="todo"));
    //   });
    axiosPublic.get(`/tasks?email=${user.email}`)
    .then(res=>{
        console.log(res.data)
        setdone(res.data.filter((task) => task.status==="done"));
        setOngoing(res.data.filter((task) => task.status==="ongoing"));
        setTodo(res.data.filter((task) => task.status==="todo"));
    })
  }, []);

  const handleDragEnd = (result) => {
    console.log(result)
    const { destination, source, draggableId } = result;

    if (source.droppableId == destination.droppableId) return;

    //REMOVE FROM SOURCE ARRAY

    // if (source.droppableId == 2) {
    //   setdone(removeItemById(draggableId, done));
    // } else {
    //   setOngoing(removeItemById(draggableId, ongoing));
    // }
    if (source.droppableId == 2) {
      setdone(removeItemById(draggableId, done));
    } else {
      setOngoing(removeItemById(draggableId, ongoing));
      setTodo(removeItemById(draggableId, todo));
    }
    if (source.droppableId == 1) {
      setOngoing(removeItemById(draggableId, ongoing));
    } else {
      setdone(removeItemById(draggableId, done));
      setTodo(removeItemById(draggableId, todo));
    }
    if (source.droppableId == 3) {
      setTodo(removeItemById(draggableId, todo));
    } else {
      setOngoing(removeItemById(draggableId, ongoing));
      setdone(removeItemById(draggableId, done));
    }

    // GET ITEM

    const task = findItemById(draggableId, [...ongoing, ...done,...todo]);

    //ADD ITEM
    // if (destination.droppableId == 2) {
    //   setdone([{ ...task, done: !task.done }, ...done]);
    // } else {
    //   setOngoing([{ ...task, done: !task.done }, ...ongoing]);
    // }
    if (destination.droppableId == 2) {
      setdone([{ ...task, status:"done" }, ...done]);
    } 
    else if(destination.droppableId == 1){
      setOngoing([{ ...task, status:"ongoing" }, ...ongoing]);
    }
    else{
        setTodo([{ ...task, status:"todo" }, ...todo]);

    }
  };

  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
    return array.filter((item) => item.id != id);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2 style={{ textAlign: "center" }}>PROGRESS BOARD</h2>

      <div className="grid-cols-1"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Column title={"To Do"} tasks={todo} id={"3"} />
        <Column title={"Ongoing"} tasks={ongoing} id={"1"} />
        <Column title={"DONE"} tasks={done} id={"2"} />
      </div>
    </DragDropContext>
  );
}