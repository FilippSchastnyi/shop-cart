import Image from '@components/_UI/Image/Image'
import RegistrationBgImg from '@assets/images/auth/register-bg.jpg'
import RegistrationBgImgX2 from '@assets/images/auth/register-bg@2x.jpg'
import AuthForm from '@components/Auth/AuthForm/AuthForm'
import { AuthVariant } from '@src/ts/enums'
import Button from '@ui/Button/Button'
import AuthCss from './Auth.module.scss'

const Registration = ({
  changeAuthMethod,
  completeAuthMethod,
}: {
  changeAuthMethod: any
  completeAuthMethod: any
}) => (
  <div className={AuthCss.authContainer}>
    <div className={AuthCss.content}>
      <h2 className={AuthCss.title}>Registration</h2>
      <AuthForm
        variant={AuthVariant.Registration}
        completeAuthMethod={completeAuthMethod}
      />
      <div className={AuthCss.confirmation}>
        <span className="text"> Already have an account? </span>
        <Button size="sm" onClick={changeAuthMethod}>
          Log In
        </Button>
      </div>
    </div>
    <div className={AuthCss.imageContainer}>
      <Image src={RegistrationBgImg} srcSet={RegistrationBgImgX2} />
    </div>
  </div>
)

export default Registration
