import classNames from 'classnames';
import './Button.scss';

// ...rest : 지정한 props 를 제외한 값들을 rest 라는 객체에 모아줌
function Button({ children, size, color, outline, fullwidth, ...rest }) {
  return (
    // outline 값이 true 일 때에만 button 에 outline CSS 클래스가 적용
    <button
      className={classNames('Button', size, color, { outline, fullwidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
