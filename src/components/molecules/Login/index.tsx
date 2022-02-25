import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input/index';
import { ILogin } from './type';

const Login = (props: ILogin) => {

  const {
    id,
    password,
    isReadOnly=false,
    handleChange,
    handleClick,
    handleKeyPress
  } = props

  return (
      <form id='login' onSubmit={handleKeyPress} >
        <Input
          type='text' 
          placeholder='아이디'
          value={id}
          isReadOnly={isReadOnly}
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
        />
        <Input
          type='password'
          placeholder='비밀번호'
          value={password}
          isReadOnly={isReadOnly}
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
          customStyle={{marginBottom:'10px'}}
        />
        <Button handleClick={handleClick}>
          로그인
        </Button>
      </form>
  )
}

export default Login