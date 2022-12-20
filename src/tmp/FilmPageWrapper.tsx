import { FC, useState } from "react";
import { FilmPage } from "../Pages/Films/Film.page";

export const FilmPageWrapper: FC = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        aliquam amet animi corporis doloribus, eligendi ex exercitationem
        facilis id ipsam natus necessitatibus optio, placeat quas suscipit
        totam, velit voluptatibus! Culpa!
      </p>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "hide" : "show"}
      </button>
      {isShow ? <FilmPage /> : null}
    </>
  );
};
