import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline }) {
  return (
    // outline 값이 true 일 때에만 button 에 outline CSS 클래스가 적용
    <button className={classNames('Button', size, color, { outline })}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
