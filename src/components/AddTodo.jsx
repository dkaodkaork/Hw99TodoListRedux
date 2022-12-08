import CustomButton from "./CustomButton";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import uuid from "react-uuid";
// 고유한 id 값을 생성하기 위해 uuid 패키지를 이용
import { addTodo } from "../redux/modules/todos";

const AddTodo = () => {
  const id = uuid().slice(0, 5);
  // 36개의 문자로 이루어진 uuid값을 5자리만 이용하기 위해서 Slice로 잘라줌.
  // console.log(id);

  const titleInput = useRef();
  const bodyInput = useRef();
  const hardInput = useRef();
  // useRef함수를 호출해서 반환값을 titleInput이라는 상수에 담음. React.MutableRefObject<undefined>가 저장됨  => html Dom 요소에 접근할 수 있는 기능,
  // dom 요소를 선택하는 ref 객체는 현재 가리키는 값을 Current라는 property 로 불러와서 사용할 수 있다

  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    hard: "",
    isdone: false,
  });

  const onChangeHandler = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  // e.target.name(input에 지정해준 name)이 내가 접근하고자 하는 상태의 이름이랑 같다.

  const addTodoHandler = () => {
    if (todo.title && todo.body && todo.hard) {
      // focus를 줘보자

      dispatch(addTodo({ ...todo, id }));
      setTodo({
        title: "",
        body: "",
        hard: "",
      });
      // input 값 입력후 초기화
    } else if (!todo.title) {
      return titleInput.current.focus();
    } else if (!todo.body) {
      return bodyInput.current.focus();
    } else {
      return hardInput.current.focus();
    }
    // input에 입력을 하지 않으면 focus 주기
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
          onChange={onChangeHandler}
        ></StInput>
        <StLabel>내용</StLabel>
        <StInput
          ref={bodyInput}
          name="body"
          placeholder="내용을 입력하세요"
          value={todo.body}
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
  max-width: 1200px;
  min-width: 800px;

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
