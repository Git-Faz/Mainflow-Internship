const Heading = ({ heading, className }) =>{
  return(
    <div className={`mx-2 ${className}`}>
      <h1 className={`flex justify-start text-4xl font-medium p-2 border-b-2 border-green-500 text-white text-left w-fit`}>
        {heading}
      </h1>
    </div>
  )
}

const SubHeading = ({ heading, className }) => {
  return (
    <div className={`mx-2 ${className}`}>
      <h2 className={`flex justify-start text-2xl font-medium p-2 text-white border-gray-500 border-b-2 text-left w-fit`}>
        {heading}
      </h2>
    </div>
  )
}

export { Heading, SubHeading };
