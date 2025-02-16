import FormInput from "../../components/FormInput";
import Logo from "../../components/Logo";
import SocialButton from "../../components/SocialButton";
import Link from "next/link";

const socialButtons = [
  { provider: "Google", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7de37a022fac1dc37386cefcb731575aa63f035d50d63d3aa3e2728ec94126fa?apiKey=b1f199f6c1e049649af563ee72ea1823&" },
  { provider: "Facebook", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c67272f4a0d72ba1761f06ca8426be071e8e3697e7d09de110a71805e54ce37c?apiKey=b1f199f6c1e049649af563ee72ea1823&" },
];

function PrepPalSignIn() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex w-full">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center w-1/2 p-10 bg-white max-md:w-full">
          <div className="max-w-md text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a494de2b494062424cc9a1c316cb2ff4c2af07e7fb8356d8dd34ec4af54c2f4?apiKey=b1f199f6c1e049649af563ee72ea1823&"
              alt="Meal prep illustration"
              className="w-full h-auto"
            />
            <h1 className="mt-6 text-3xl font-bold text-black">Discover the Joy of Meal Prepping</h1>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of food enthusiasts who have transformed their cooking journey with our smart meal prep platform.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center w-1/2 p-10 max-md:w-full">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Logo />
            </div>

            {/* Social Sign-In */}
            <div className="flex flex-col gap-3 mb-6">
              {socialButtons.map((button) => (
                <SocialButton key={button.provider} provider={button.provider} image={button.image} />
              ))}
            </div>

            {/* Divider */}
            <div className="relative my-6 text-center">
              <span className="relative px-4 bg-white text-sm text-gray-600 z-[1]">Or continue with</span>
            </div>

            {/* Sign-In Form */}
            <form className="flex flex-col gap-6">
              <FormInput label="Email address" type="email" placeholder="your@email.com" id="email" />
              <FormInput label="Password" type="password" placeholder="••••••••" id="password" />

              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" id="remember" className="w-4 h-4 rounded border border-gray-400" />
                  <label htmlFor="remember" className="text-sm text-gray-700">Remember me</label>
                </div>
                <a href="#" className="text-sm text-orange-500">Forgot password?</a>
              </div>

              <Link href="/account">
                <button className="w-full p-3 text-base font-medium text-white bg-orange-500 rounded-lg">Sign in</button>
              </Link>
            </form>

            {/* Sign-Up Link */}
            <div className="mt-6 text-sm text-center">
              <span>Don't have an account? </span>
              <Link href="/signup" className="font-medium text-orange-500">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrepPalSignIn;