import { homneScreen } from "../config/theme/global.theme";
import UnAuthenticatedLayout from "../components/authentication/UnAuthenticatedLayout";

export default function HomePage() {
  return (
      <UnAuthenticatedLayout>
        <main className={homneScreen}>
          <div className="md:mt-12 mt-52 w-full flex justify-end">
            <div className="block w-full md:w-1/4 bg-bitBrown backdrop-blur-md md:backdrop-blur-none px-6 py-6 mt-12 md:mt-48 text-right rounded-lg">
              <h1 className="text-white text-4xl">
                Reach your Goals
              </h1>
              <br />
              <div>
                <span className="font-fredoka text-yellow-600 text-4xl">Bit </span>
                <span className="font-fredoka text-white text-4xl">by</span>
                <span className="font-fredoka text-yellow-600 text-4xl"> Bit</span>
              </div>
              <br />
              <div className="flex justify-center md:justify-start lg:justify-start text-base text-white">
                A gamified study platform by the students, of the students and for the students
              </div>
            </div>
          </div>
        </main>
      </UnAuthenticatedLayout>
  );
}