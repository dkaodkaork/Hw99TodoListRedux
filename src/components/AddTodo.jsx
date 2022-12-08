import CustomButton from "./CustomButton";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import uuid from "react-uuid";
// import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../redux/modules/todos";

const AddTodo = () => {
  // const [title, setTitle] = useState("");        /// (0) 상태관리를 한번에 묶어서 해보자
  // const [body, setBody] = useState("");
  const id = uuid().slice(0, 5); //  const id = useRef(0) => id: id.current,  id.current +=1
  // const id = useRef(3);

  // console.log(id);

  const titleInput = useRef(); // useRef함수를 호출해서 반환값을 titleInput이라는 상수에 담아주자 React.MutableRefObject<undefined>가 저장된다  => html Dom 요소에 접근할 수 있는 기능
  const bodyInput = useRef();
  const hardInput = useRef();

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    hard: "",
    isdone: false,
  });

  const onChangeHandler = (e) => {
    //   (3) onchange도 하나로 만들어주자 e객체를 줌
    // console.log(e.target.name);    콘솔에 input의 name과 value를 찍어보자
    // console.log(e.target.value);

    setTodo({ ...todo, [e.target.name]: e.target.value }); //   e.target.name 이 결국 내가 접근하고자 하는 상태의 이름이랑 같다.
  };

  // console.log(id);

  // const todos = useSelector((state) => state.todos.todos);
  // console.log(todos[0]["id"]);

  const dispatch = useDispatch();

  const addTodoHandler = () => {
    if (todo.title && todo.body && todo.hard) {
      // focus를 줘보자

      dispatch(addTodo({ ...todo, id }));
      // setBody(""); // input 값 value에 상태로 관리하는 Body 값을 주어 add 후 value 값을 빈값으로 상태변경 =>화면렌더링 이후 useEffect로 처리 할수 있는가?
      // setTitle("");
      setTodo({
        title: "",
        body: "",
        hard: "",
      });
    } else if (!todo.title) {
      return titleInput.current.focus(); // dom 요소를 선택하는 ref 객체는 현재 가리키는 값을 Current라는 property 로 불러와서 사용할 수 있다
    } else if (!todo.body) {
      return bodyInput.current.focus();
    } else {
      return hardInput.current.focus();
    }
  };

  return (
    <StAddBox>
      <StInputBox>
        <StLabel>제목</StLabel>
        <StInput
          ref={titleInput} // titleInput이라는 레퍼런스 객체를 통해서 input 태그에 접근
          name="title"
          placeholder="제목을 입력하세요"
          value={todo.title}
          // onChange={(e) => {             ///  (1)
          //   setTodo({
          //     title: e.target.value,
          //     body:todo.body
          //   });
          // }}
          onChange={onChangeHandler}
        ></StInput>
        <StLabel>내용</StLabel>
        <StInput
          ref={bodyInput}
          name="body"
          placeholder="내용을 입력하세요"
          value={todo.body}
          // onChange={(e) => {           ///   (2) 스프레드 연산자 사용
          //   setTodo({
          //     ...todo,               /// 순서 중요  원래 있던 state를 먼저 펼쳐주고, 병경하고자 하는 property 를 뒤에 적어 덮어씌운다
          //     body: e.target.value,
          //   });
          // }}
          onChange={onChangeHandler}
        ></StInput>
        <StLabel>난이도</StLabel>
        <Stselect
          ref={hardInput}
          name="hard"
          value={todo.hard}
          onChange={onChangeHandler}
        >
          <option value={1}>🔥</option>
          <option value={2}>🔥🔥</option>
          <option value={3}>🔥🔥🔥</option>
          <option value={4}>🔥🔥🔥🔥</option>
          <option value={5}>🔥🔥🔥🔥🔥</option>
        </Stselect>
        <CustomButton
          name="추가!"
          color="#76c4b5"
          onClick={addTodoHandler}
        ></CustomButton>
      </StInputBox>
    </StAddBox>
  );
};

export default AddTodo;

const StAddBox = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 30px;

  background-color: #fbd7de;

  border: none;
  border-radius: 10px;
`;

const StInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  border: none;
`;

const StLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
`;

const StInput = styled.input`
  width: 250px;
  height: 40px;

  border: none;
  border-radius: 10px;
`;

const Stselect = styled.select`
  width: 110px;
  height: 40px;

  border: none;
  border-radius: 10px;

  margin-right: 100px;
`;
