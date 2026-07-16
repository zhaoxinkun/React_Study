import {useParams} from "react-router";

export default function ProfileId() {

  const {id} = useParams()
  return (
    <>
      this is profiles id {id}
    </>
  );
}
