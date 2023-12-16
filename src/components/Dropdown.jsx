import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown({ className, isStateOpen, setStateOpen, title, description, list }) {
  return (
    <div 
      className={`${className}__dropdown`}
      onClick={() => isStateOpen ? setStateOpen(false) : setStateOpen(true)}
    >
      <div className={`${className}__dropdown__content`}>
        <p>{title}</p>
        <FontAwesomeIcon 
          icon={isStateOpen ? faChevronUp : faChevronDown} 
        />
      </div>

      {isStateOpen && (
        <div className={`${className}__description`}>
          {description && <p>{description}</p>}
          {list && list?.map((el, index) => <p key={index}>{el}</p>)}
        </div>
      )}
    </div>
  )
}

export default Dropdown
