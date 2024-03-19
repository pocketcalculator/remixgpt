import Layout from '../components/Layout';
import Container from '../components/Container';
import FormRow from '../components/FormRow';
import FormLabel from '../components/FormLabel';
import InputText from '../components/InputText';
import Button from '../components/Button';
import GoogleLogo from '../assets/google_logo.svg';
import MicrosoftLogo from '../assets/microsoft_logo.svg';
import LinkedInLogo from '../assets/linkedin_logo.svg';
import background_image from '../assets/login_background.png'

function Login() {
    /**
     * handleOnSubmit
     */

    async function handleOnSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
    }

    return (
        <Layout>
            <Container className="px-0 max-w-full grid grid-cols-2 place-items-stretch h-full">
                <div className="object-fill bg-cover" style={{backgroundImage: `url(${background_image})`}}>
                    <div className="flex justify-center items-center h-full flex-col mt-10">
                        <button className="w-1/2 rounded-full bg-white text-slate-600 mb-8 py-2.5 px-6 text-md hover:font-bold flex flex-row justify-center">
                            <img src={GoogleLogo} alt="Google Logo" className="mr-3.5"/>
                            <span>Sign in with Google</span>
                        </button>
                        <button className="w-1/2 rounded-full bg-white text-slate-600 mb-8 py-2.5 px-6 text-md hover:font-bold flex flex-row justify-center">
                            <img src={MicrosoftLogo} alt="Microsoft Logo" className="mr-3.5"/>
                            <span>Sign in with Outlook</span>
                        </button>
                        <button className="w-1/2 rounded-full bg-white text-slate-600 mb-8 py-2.5 px-6 text-md hover:font-bold flex flex-row justify-center">
                            <img src={LinkedInLogo} alt="LinkedIn Logo" className="mr-3.5"/>
                            <span>Sign in with LinkedIn</span>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center h-full flex-col">
                    <div className="text-6xl text-neutral-600 tracking-widest font-bold text-center">
                        <span>RemixGPT</span>
                    </div>
                    <div className="text-3xl text-neutral-600 pt-5 pb-12 text-center">
                        <span>Grant writing made easy</span>
                    </div>
                    <div className="text-3xl text-neutral-600 pt-12 text-center">
                        <span>Sign in</span>
                    </div>
                    <form className="w-3/5 mx-auto p-8" onSubmit={handleOnSubmit}>
                        <FormRow className="mb-5">
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <InputText id="email" name="email" type="email" />
                        </FormRow>

                        <FormRow className="mb-5">
                            <FormLabel htmlFor="text">Password</FormLabel>
                            <InputText id="password" name="password" type="text" />
                        </FormRow>
                        <div className="md:flex mb-6">
                            <div className=""></div>
                            <label className="text-neutral-600">
                                <input className="mr-2 leading-tight" type="checkbox" />
                                <span className="text-sm">
                                    Remember me
                                </span>
                            </label>
                        </div>
                        <Button className="rounded-full w-full">Sign in</Button>
                        <div className="pt-7">
                            <Button className="rounded-full w-full bg-fuchsia-600">Sign up</Button>
                        </div>
                    </form>
                </div>
            </Container>
        </Layout>
    )
}

export default Login;
