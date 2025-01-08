import './form-input.styles.scss'; 
const FormInput = ({label, ...otherProps}) => {
    return (
        <div className="group">
          {label && (  <label className={`${otherProps.value?.length ? 'shrink' : null} form-input-label`}>{label}</label>)}
            <input className="form-input" {...otherProps} />
        </div>
    )
    FormInput.defaultProps = {
        value: '',
      }
}

// const FormInput = ({label, ...otherProps}) => {
//   return (
//     <div>
//       <label>{label}</label>
//       <input {...otherProps} />
//     </div>
//   )
// }

export default FormInput ;