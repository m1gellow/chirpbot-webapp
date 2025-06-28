
export const Button = (props: any) => {
  return (
    <>
    <button {...props} className={'button' + props.className}/>
    </>
  )
}
