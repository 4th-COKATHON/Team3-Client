import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      없는 페이지입니다.
      <Link to="/main">
        <button>main으로 가기!</button>
      </Link>
    </>
  );
};

export default NotFoundPage;