
export const Error = ({children}) => {
  console.log(children)
  return (
    <div className="w-1/2 mx-auto bg-red-600 text-white font-black py-1 rounded  text-center mb-3">{children}</div>
  )
}
