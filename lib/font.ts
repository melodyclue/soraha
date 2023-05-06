import { M_PLUS_Rounded_1c } from "next/font/google";

const mPlusRFont = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-mplus",
});

export const mPlustFontClass = mPlusRFont.variable;
