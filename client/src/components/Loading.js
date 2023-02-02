const Loading = ({ center }) => {
  return (
    <div className={ center ? "loading loading-senter" : "loading" }></div>
  )
}

export default Loading