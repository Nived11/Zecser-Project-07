import ContainarItem from "./ContainarItem";
import little from "../../../assets/little-kites.png";
import redcros from "../../../assets/red-cross.png";
import aksharam from "../../../assets/aksharam.png";
import counseling from "../../../assets/counseling.png";
import useWeProvideFetch from "../hooks/useWeProvideFetch";
import LoadingSkeleton from "./LoadingSkeleton";
const items = [
  {
    id: 1,
    icon: (
      <svg
        width="57"
        height="40"
        viewBox="0 0 57 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.5 0L0 10.7298L28.5 25.0359L42.0742 18.2221L29.3401 14.3134C29.0778 14.4397 28.7908 14.5055 28.5 14.5062C27.9821 14.5062 27.4854 14.2996 27.1192 13.932C26.753 13.5643 26.5472 13.0657 26.5472 12.5457C26.5472 12.0258 26.753 11.5271 27.1192 11.1595C27.4854 10.7918 27.9821 10.5853 28.5 10.5853L28.1771 11.6393L30.4395 12.338L30.4404 12.3449L33.779 13.3698L52.7876 19.2413V20.7295C52.5247 20.9091 52.3095 21.1504 52.1606 21.4325C52.0117 21.7146 51.9337 22.0289 51.9333 22.3481C51.9336 22.6747 52.0152 22.996 52.1707 23.2829C52.3261 23.5697 52.5505 23.8131 52.8234 23.9908C51.9345 27.3634 51.9333 35.0154 51.9333 38.0317C53.8861 39.3054 53.8861 39.3519 55.8388 38.0317C55.8388 35.0158 55.8379 27.3652 54.9491 23.9919C55.2221 23.814 55.4465 23.5705 55.6019 23.2834C55.7573 22.9963 55.8387 22.6748 55.8388 22.348C55.8388 22.0284 55.7609 21.7137 55.612 21.4312C55.4631 21.1487 55.2477 20.9071 54.9845 20.7273V17.6126L47.7441 15.3761L57 10.7298L28.5 0ZM11.8554 19.5299L10.2538 29.1778C13.4484 29.5972 17.2698 31.4613 20.7829 33.6656C22.7808 34.9193 24.6522 36.2955 26.1721 37.6307C27.1011 38.4467 27.8779 39.2297 28.5 40C29.1221 39.2295 29.8989 38.4467 30.828 37.6307C32.3478 36.2955 34.2191 34.9193 36.2171 33.6656C39.7302 31.4613 43.5516 29.5972 46.7462 29.1778L45.1443 19.5299H44.3815L28.5 27.5019L12.6182 19.5299H11.8554Z"
          fill="black"
        />
      </svg>
    ),
    title: "USS and NMMS Scholarships",
    description:
      "A year-long systematic training for students appearing for the scholarship exams. Our school achieved success in the tough USS and NMMS scholarship exams last year, beating many of the best schools in the district.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="30"
        height="30"
        style={{ background: "black", borderRadius: "4px", padding: "4px" }}
        viewBox="0 0 22 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2H20M15.5035 2V9.38292C15.3516 14.7434 9.2019 15.8435 4.69779 9.38292L17.3022 26"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Sanskrit",
    description:
      "Children have the opportunity to learn Sanskrit along with Malayalam. This year, 11 children have won the Central Government's Sanskrit scholarship.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="25"
        height="33"
        viewBox="0 0 25 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.46899 16.4H9.75147M15.2133 18.2C15.2133 18.2 16.1236 18.2 17.034 20C17.034 20 19.9251 15.5 22.4958 14.6M2.46899 27.2H9.75147M15.2133 29C15.2133 29 16.1236 29 17.034 30.8C17.034 30.8 19.9251 26.3 22.4958 25.4M4.28233 5.15C4.28233 3.4112 5.7097 2 7.46842 2H17.4818C18.3268 2 19.1372 2.33187 19.7347 2.92261C20.3322 3.51335 20.6679 4.31457 20.6679 5.15C20.6679 5.98543 20.3322 6.78665 19.7347 7.37739C19.1372 7.96813 18.3268 8.3 17.4818 8.3H7.46842C6.62341 8.3 5.81302 7.96813 5.21551 7.37739C4.61801 6.78665 4.28233 5.98543 4.28233 5.15Z"
          stroke="#00113D"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Quiz Club",
    description:
      "The Quiz Club provides systematic training to enable children to participate in various quiz competitions. The children of our school, which is an ordinary school in the rural area of the district, give strong competition in various quiz competitions and win various prizes.",
  },
  {
    id: 4,
    image: little,
    title: "Little Kites",
    description: `An ideal training program that helps children to transform into IT-based professionals. Children get the opportunity to participate in various camps, training programs, IT fests, and IT competitions.
    Programs like IT camps, Awareness Classes, Robo Fests develop leadership and organizational skills in children. Children who are a part of Little Kites receive Grace Marks.
    `,
  },
  {
    id: 5,
    image: redcros,
    title: "JUNIOR RED CROSS",
    description:
      "The school has an active Red Cross Unit which helps the children in nourishing their talents and shaping up their attitude. The activities under the unit encourage younger generation to cultivate their humanitarian spirit. This programme helps them to secure grace marks and to improve their scores.",
  },
  {
    id: 6,
    icon: (
      <svg
        width="40"
        height="44"
        viewBox="0 0 40 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_68_2638"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="40"
          height="44"
        >
          <path
            d="M34.687 2H4.97154C3.33041 2 2 3.49238 2 5.33333V38.6667C2 40.5076 3.33041 42 4.97154 42H34.687C36.3281 42 37.6585 40.5076 37.6585 38.6667V5.33333C37.6585 3.49238 36.3281 2 34.687 2Z"
            fill="white"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.8577 14.2227H8.93359V29.7782H16.3625M8.93359 22.0004H16.3625M21.8103 16.4449V29.7782V22.556C21.8103 21.2299 22.2799 19.9581 23.1158 19.0205C23.9517 18.0828 25.0855 17.556 26.2676 17.556C27.4498 17.556 28.5835 18.0828 29.4194 19.0205C30.2553 19.9581 30.7249 21.2299 30.7249 22.556V29.7782"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </mask>
        <g mask="url(#mask0_68_2638)">
          <path
            d="M-3.94312 -4.66602H43.6016V48.6673H-3.94312V-4.66602Z"
            fill="black"
          />
        </g>
      </svg>
    ),
    title: "COMMUNICATIVE ENGLISH LEARNING PROGRAMME",
    description:
      "Efficiency in English is imperative in the modern world. The training given during childhood is very crucial in language learning. Children are given training in English communication skill through various activities, worksheets, role plays and presentations. Class-room learning is organized in such a way that students acquire language skills. Other than classroom activities, students take initiative in organizing language based activities which can be done outside the classroom.",
  },
  {
    id: 7,
    image: aksharam,
    title: "Aksharamadhuram",
    description:
      "Children are facing a lot of difficulties in our mother tongue, Malayalam. Children are completely confused with the structure of Malayalam, they are confused by the vowels and consonants. 'The Aksharamadhuram Project' aims to enable them to write and read without mistakes and to present ideas beautifully. Through Aksharamadhuram, which starts from April, children learn to read and write languages properly.",
  },
  {
    id: 8,
    icon: (
      <svg
        width="41"
        height="30"
        viewBox="0 0 41 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H40.9737V9.98165H36.4211V4.55263H4.55263V25.0395H14.4159V29.5921H0V0Z"
          fill="black"
        />
      </svg>
    ),
    title: "Life Skills Training",
    description:
      "Training is provided under the guidance of expert trainers from the summer vacation onwards to develop the life skills needed for an individual. Providing maximum activities related to the lessons enable the children to recognize their strengths, and to develop and think differently.",
  },
  {
    id: 9,
    image: counseling,
    title: "Counseling and Career Guidance",
    description:
      "Classes by eminent personalities in the field of counseling are being provided regularly. In addition to anti-drug camps, adolescent counseling, and exam preparation counseling, various motivation classes and career guidance classes are also being provided. 12 children from the school were selected under the 'Student Doctor' scheme of the Health Department for peer counseling. The children regularly participate in the trainings organized by the Health Department.",
  },
  {
    id: 10,
    icon: (
      <svg
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.5 0C12.32 0 0 12.32 0 27.5C0 42.68 12.32 55 27.5 55C42.68 55 55 42.68 55 27.5C55 12.32 42.68 0 27.5 0ZM30.25 9.075L33.9625 6.4625C38.9382 8.00186 43.2063 11.2566 46.0075 15.6475L44.935 19.3325L41.2225 20.5975L30.25 12.925V9.075ZM21.0375 6.4625L24.75 9.075V12.925L13.7775 20.5975L10.065 19.3325L8.9925 15.6475C11.8113 11.2728 16.0728 8.0231 21.0375 6.4625ZM13.97 41.5525L10.835 41.8275C7.38816 37.8506 5.49361 32.7627 5.5 27.5C5.5 27.17 5.5275 26.8675 5.555 26.5375L8.305 24.53L12.1 25.85L16.115 37.785L13.97 41.5525ZM34.375 48.3725C32.2025 49.0875 29.8925 49.5 27.5 49.5C25.1075 49.5 22.7975 49.0875 20.625 48.3725L18.7275 44.275L20.4875 41.25H34.54L36.3 44.3025L34.375 48.3725ZM33.7425 35.75H21.2575L17.545 24.695L27.5 17.71L37.4825 24.695L33.7425 35.75ZM44.165 41.8275L41.03 41.5525L38.8575 37.785L42.8725 25.85L46.695 24.5575L49.445 26.565C49.4725 26.8675 49.5 27.17 49.5 27.5C49.5 32.9725 47.4925 37.9775 44.165 41.8275Z"
          fill="black"
        />
      </svg>
    ),
    title: "Sports Academy",
    description: `With high-quality sports grounds, excellent coaches and systematic training starting from the summer holidays, our school has become the best sports school in the district.
    Last year, the school won second place in the Pathanamthitta District Sports Festival. The students of our school, which is just a high school, were able to leave behind more than a hundred higher secondary schools in the district. We were able to produce 5 national players and more than 80 state players in basketball, athletics, football, volleyball, netball, tug-of-war, tennis and other sports and win 37 state medals. Hostel facility is also available for sports players to stay and study.
    Through these successes, grace marks, cash awards, admission to higher classes, PSC Grace Marks are secured which help them in getting admissions in prestigious institutions and to set up a promising future.
    Goal-oriented, systematic sports training plays an important role in creating healthy, drug-free youth.`,
  },
  {
    id: 11,
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.9712 5.17929C36.7836 5.17929 30.2302 3.17099 25.5794 0C24.7338 3.80519 24.2053 8.03319 24.2053 12.4726C24.2053 31.0757 43.8655 46.1908 43.8655 46.1908C43.8655 46.1908 63.42 31.0757 63.42 12.4726C63.42 8.13889 62.9972 4.01659 62.0459 0.2114C57.3951 3.27669 51.0531 5.17929 43.9712 5.17929Z"
          fill="#42ADE2"
        />
        <path
          d="M52.4272 32.3434C52.4272 30.4408 48.5163 24.8387 43.7598 24.8387C39.0033 24.8387 35.0924 30.5465 35.0924 32.3434C35.0924 34.246 39.0033 31.4978 43.7598 31.4978C48.622 31.4978 52.4272 34.1403 52.4272 32.3434ZM41.4344 13.6346C40.166 13.1061 37.6292 11.9434 35.938 11.9434C34.4582 11.9434 31.71 13.0004 30.3359 13.6346C29.1732 14.1631 28.9618 14.5859 29.2789 15.3258C29.4903 16.0657 30.3359 16.4885 31.1815 16.2771C31.1815 16.2771 34.5639 14.6916 35.8323 14.6916C37.1007 14.6916 40.5888 16.2771 40.5888 16.2771C41.4344 16.4885 42.28 16.0657 42.4914 15.3258C42.8085 14.6916 42.5971 14.1631 41.4344 13.6346ZM57.8179 13.6346C56.5495 13.1061 54.0127 11.9434 52.3215 11.9434C50.8417 11.9434 48.0935 13.0004 46.7194 13.6346C45.5567 14.1631 45.3453 14.5859 45.6624 15.3258C45.8738 16.0657 46.7194 16.4885 47.565 16.2771C47.565 16.2771 50.9474 14.6916 52.2158 14.6916C53.4842 14.6916 56.9723 16.2771 56.9723 16.2771C57.8179 16.4885 58.6635 16.0657 58.8749 15.3258C59.192 14.6916 58.9806 14.1631 57.8179 13.6346Z"
          fill="#3E4347"
        />
        <path
          d="M18.4975 26.1088C11.9441 28.5399 5.28499 28.857 0 27.4829C0.422799 31.2881 1.3741 35.3047 2.8539 39.2156C8.98449 56.2333 31.8156 63.4209 31.8156 63.4209C31.8156 63.4209 44.6053 43.2322 38.4747 26.3202C37.1006 22.4093 35.3037 18.8155 33.1897 15.6445C30.0188 19.9782 24.8395 23.7834 18.4975 26.1088Z"
          fill="#FF717F"
        />
        <path
          d="M33.4011 43.1251C34.0353 44.8163 32.3441 51.2639 28.0104 52.8494C23.6767 54.4349 18.286 50.524 17.6518 48.8328C17.0176 47.1416 21.457 48.3043 25.7907 46.7189C30.1244 45.1334 32.7669 41.4339 33.4011 43.1251ZM18.286 34.8805C16.9119 34.7748 14.2694 34.5634 12.7896 35.0919C11.4155 35.6204 9.30154 37.523 8.35024 38.4743C7.39894 39.3199 7.39894 39.8484 7.82174 40.3769C8.24454 41.0111 9.19584 41.1168 9.93574 40.5883C9.93574 40.5883 12.4725 38.0515 13.6352 37.6287C14.7979 37.2059 18.4974 37.523 18.4974 37.523C19.343 37.4173 19.9772 36.7831 19.9772 36.0432C19.8715 35.3033 19.5544 34.8805 18.286 34.8805ZM33.1897 29.3841C31.8156 29.2784 29.1731 29.067 27.6933 29.5955C26.3192 30.124 24.2052 32.0266 23.2539 32.9779C22.4083 33.8235 22.4083 34.352 22.8311 34.8805C23.2539 35.5147 24.2052 35.6204 24.9451 35.0919C24.9451 35.0919 27.4819 32.5551 28.6446 32.1323C29.8073 31.7095 33.5068 32.0266 33.5068 32.0266C34.3524 31.9209 34.9866 31.2867 34.9866 30.5468C34.7752 29.9126 34.4581 29.4898 33.1897 29.3841Z"
          fill="#3E4347"
        />
        <path
          d="M24.311 12.4733C24.0996 14.3759 23.6768 16.1728 22.9369 17.9697C22.6198 18.8153 22.0913 19.6609 21.5628 20.5065C20.9286 21.3521 20.1887 22.092 19.1317 22.5148C18.0747 22.9376 16.8063 22.8319 15.9607 22.4091C15.0094 21.9863 14.2695 21.4578 13.5296 20.8236C12.0498 19.6609 10.57 18.3925 9.51302 16.807C8.98452 15.9614 8.56172 15.0101 8.35032 14.0588C8.13892 13.0018 8.13892 12.0505 8.35032 10.9935C8.66742 8.98518 9.72442 7.08259 10.9928 5.60279C12.3669 4.12299 14.0581 2.96029 15.855 2.3261C17.6519 1.5862 19.7659 1.3748 21.5628 2.1147V2.3261C19.7659 2.3261 18.0747 2.96029 16.5949 3.80589C15.1151 4.65149 13.8467 5.81419 12.684 7.08259C11.627 8.35099 10.6757 9.83078 10.3586 11.4163C9.93582 13.0018 10.1472 14.693 10.7814 16.2785C11.4156 17.864 12.5783 19.3438 14.0581 20.4008C14.798 20.9293 15.6436 21.3521 16.3835 21.4578C17.2291 21.5635 17.969 21.4578 18.4975 21.035C19.6602 20.1894 20.7172 18.7096 21.5628 17.2298C22.5141 15.6443 23.254 14.0588 24.2053 12.4733H24.311Z"
          fill="#DBB046"
        />
        <path
          d="M24.0995 12.5776C22.1969 11.3092 19.9772 10.7807 18.0746 11.0978C17.1233 11.2035 16.2777 11.6263 15.8549 12.2605C15.4321 12.8947 15.3264 13.846 15.5378 14.7973C15.6435 15.3258 15.7492 15.7486 15.9606 16.2771C16.172 16.8056 16.3834 17.4398 16.4891 17.9683C16.7005 19.131 16.7005 20.3994 16.4891 21.5621C15.9606 23.8875 14.2694 26.0015 11.8383 26.7414C10.6756 27.1642 9.30151 27.1642 8.03312 26.6357C6.76472 26.1072 5.81342 25.1559 5.07352 24.0989C4.33362 23.0419 3.80512 21.8792 3.59372 20.6108C3.27662 19.3424 3.38232 18.074 3.48802 16.9113C3.80512 14.4802 4.65072 12.3662 5.17922 10.2523C5.49632 9.19525 5.70772 8.13825 5.39062 7.18696C5.17922 6.34136 4.33362 5.49576 3.38232 4.96726L3.48802 4.75586C4.01652 4.86156 4.65072 5.07296 5.17922 5.39006C5.70772 5.70716 6.23622 6.23566 6.44762 6.76416C7.08182 8.03255 6.97612 9.30095 6.87042 10.4636C6.55332 12.789 5.91912 15.0087 5.70772 17.1227C5.49632 19.2367 5.70772 21.245 6.76472 23.0419C7.71602 24.7331 9.51291 25.8958 11.6269 25.5787C12.5782 25.3673 13.6352 24.9445 14.3751 24.2046C15.115 23.4647 15.6435 22.4077 15.8549 21.3507C16.0663 20.2937 15.8549 19.2367 15.4321 18.1797C15.2207 17.6512 15.0093 17.2284 14.6922 16.6999C14.3751 16.1714 14.1637 15.6429 13.9523 15.0087C13.7409 14.3745 13.6352 13.7403 13.7409 13.0004C13.7409 12.2605 14.058 11.5206 14.4808 10.9921C15.4321 9.72375 16.9119 9.30095 18.0746 9.19525C20.6114 9.08955 23.0425 10.2523 24.4166 12.1548L24.0995 12.5776Z"
          fill="#FFCE31"
        />
        <path
          d="M24.2052 15.1151C25.6646 15.1151 26.8477 13.932 26.8477 12.4726C26.8477 11.0132 25.6646 9.83008 24.2052 9.83008C22.7458 9.83008 21.5627 11.0132 21.5627 12.4726C21.5627 13.932 22.7458 15.1151 24.2052 15.1151Z"
          fill="#FFD86C"
        />
        <path
          d="M42.3856 38.6861C41.2229 40.2715 40.3773 41.9627 39.6374 43.8653C39.3203 44.8166 39.1089 45.8736 39.0032 46.9306C38.8975 47.9876 39.0032 49.1503 39.6374 50.313C40.1659 51.4757 41.3286 52.3213 42.3856 52.7441C43.4426 53.1669 44.4996 53.2726 45.5566 53.484C47.5649 53.6954 49.6789 53.9068 51.7929 53.484C52.8499 53.2726 53.8012 52.8498 54.7525 52.3213C55.5981 51.6871 56.4437 50.9472 56.9722 49.9959C58.1349 48.199 58.6634 45.9793 58.5577 43.8653C58.452 41.7513 57.9235 39.5316 56.8665 37.6291C56.338 36.6778 55.7038 35.7265 54.9639 34.8809L54.224 35.8322C54.6468 36.5721 54.9639 37.4177 55.281 38.2633C55.9152 40.0602 56.2323 41.9627 56.2323 43.7596C56.2323 45.5565 55.9152 47.3534 55.1753 48.8332C54.4354 50.313 53.0613 51.4757 51.4758 52.2156C49.7846 52.9555 47.7763 53.1669 45.8737 52.7441C44.9224 52.6384 43.9711 52.2156 43.1255 51.6871C42.2799 51.1586 41.8571 50.4187 41.6457 49.6788C41.2229 48.199 41.4343 46.2964 41.7514 44.3938C42.0685 42.4912 42.597 40.6943 42.9141 38.6861H42.3856Z"
          fill="#DBB046"
        />
        <path
          d="M41.1172 37.9458C43.4426 38.7914 45.5566 40.3769 46.7193 42.2795C47.3535 43.2308 47.5649 44.2878 47.3535 45.0277C47.1421 45.7676 46.5079 46.5075 45.5566 46.9303C45.1338 47.1417 44.6053 47.3531 44.0768 47.5645C43.5483 47.7759 42.9141 47.9873 42.2799 48.1987C41.2229 48.8329 40.1659 49.6785 39.5317 50.7355C38.0519 52.7437 37.6291 55.5976 38.7918 58.2401C39.3203 59.5085 40.3773 60.7769 41.6457 61.5168C42.9141 62.2567 44.3939 62.5738 45.768 62.4681C47.1421 62.3624 48.4105 62.0453 49.6789 61.4111C50.8416 60.7769 51.8986 59.9313 52.7442 59.0857C54.4354 57.1831 55.5981 55.0691 56.8665 53.1665C57.5007 52.2152 58.2406 51.3697 59.0862 50.9469C60.0375 50.5241 61.2002 50.7355 62.3629 51.264L62.4686 51.0526C61.9401 50.6298 61.4116 50.207 60.7774 49.9956C60.1432 49.7842 59.4033 49.6785 58.6634 49.7842C57.2893 50.1013 56.2323 51.0525 55.3867 51.8981C53.6955 53.695 52.4271 55.7033 50.8416 57.2888C49.3618 58.8743 47.5649 60.037 45.3452 60.2484C43.2312 60.5655 41.0115 59.7199 39.8488 57.7116C39.2146 56.7603 38.8975 55.4919 39.0032 54.3292C39.0032 53.1665 39.426 52.0039 40.1659 51.1583C40.9058 50.3127 41.8571 49.7842 43.0198 49.4671C43.5483 49.3614 44.0768 49.2557 44.711 49.15C45.3452 49.0443 45.9794 48.9386 46.6136 48.7272C47.2478 48.5158 47.882 48.1987 48.4105 47.6702C48.939 47.1417 49.3618 46.5075 49.5732 45.6619C49.8903 44.0764 49.2561 42.4909 48.3048 41.3282C46.5079 39.0028 43.7597 37.7344 41.3286 37.7344L41.1172 37.9458Z"
          fill="#FFCE31"
        />
        <path
          d="M42.9872 40.1252C44.1102 39.1932 44.1744 37.418 43.1306 36.1602C42.0867 34.9024 40.3301 34.6383 39.207 35.5703C38.084 36.5023 38.0198 38.2775 39.0636 39.5353C40.1075 40.7931 41.8641 41.0572 42.9872 40.1252Z"
          fill="#FFD86C"
        />
      </svg>
    ),
    title: "Arts Club",
    description: `We identify the talents of children and provide training to develop their artistic talents. Under the leadership of Vidyarangam Kala Sahitya Vedi, various programs are being conducted.
    Our children have been participating in various competitions held at the sub-district, district and state levels and have been winning various prizes. Our school has proved to be a strong presence in the art festivals for the last 3 years.
    `,
  },
  {
    id: 12,
    icon: (
      <svg
        width="42"
        height="50"
        viewBox="0 0 42 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.75 23.6842H5.25V10.5263H36.75M32.8125 39.4737C31.7682 39.4737 30.7667 39.0578 30.0283 38.3175C29.2898 37.5772 28.875 36.5732 28.875 35.5263C28.875 34.4794 29.2898 33.4754 30.0283 32.7351C30.7667 31.9948 31.7682 31.5789 32.8125 31.5789C33.8568 31.5789 34.8583 31.9948 35.5967 32.7351C36.3352 33.4754 36.75 34.4794 36.75 35.5263C36.75 36.5732 36.3352 37.5772 35.5967 38.3175C34.8583 39.0578 33.8568 39.4737 32.8125 39.4737ZM9.1875 39.4737C8.14321 39.4737 7.14169 39.0578 6.40327 38.3175C5.66484 37.5772 5.25 36.5732 5.25 35.5263C5.25 34.4794 5.66484 33.4754 6.40327 32.7351C7.14169 31.9948 8.14321 31.5789 9.1875 31.5789C10.2318 31.5789 11.2333 31.9948 11.9717 32.7351C12.7102 33.4754 13.125 34.4794 13.125 35.5263C13.125 36.5732 12.7102 37.5772 11.9717 38.3175C11.2333 39.0578 10.2318 39.4737 9.1875 39.4737ZM0 36.8421C0 39.1579 1.02375 41.2368 2.625 42.6842V47.3684C2.625 48.0664 2.90156 48.7357 3.39385 49.2292C3.88613 49.7227 4.55381 50 5.25 50H7.875C8.57119 50 9.23887 49.7227 9.73115 49.2292C10.2234 48.7357 10.5 48.0664 10.5 47.3684V44.7368H31.5V47.3684C31.5 48.0664 31.7766 48.7357 32.2688 49.2292C32.7611 49.7227 33.4288 50 34.125 50H36.75C37.4462 50 38.1139 49.7227 38.6062 49.2292C39.0984 48.7357 39.375 48.0664 39.375 47.3684V42.6842C40.9762 41.2368 42 39.1579 42 36.8421V10.5263C42 1.31579 32.6025 0 21 0C9.3975 0 0 1.31579 0 10.5263V36.8421Z"
          fill="black"
        />
      </svg>
    ),
    title: "Vehicle Facility",
    description:
      "To facilitate the children to reach school, two new vehicles were purchased in 2024 academic year by the PTA and management. Due to the increasing number of children and the fact that children come to school from different places, the Management has purchased another new vehicle this year.",
  },
  {
    id: 13,
    icon: (
      <svg
        width="54"
        height="44"
        viewBox="0 0 54 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M49.0909 39.1111H54V44H0V39.1111H4.90909V2.44444C4.90909 1.79614 5.16769 1.17438 5.62801 0.715961C6.08833 0.257539 6.71265 0 7.36364 0H31.9091C32.5601 0 33.1844 0.257539 33.6447 0.715961C34.105 1.17438 34.3636 1.79614 34.3636 2.44444V39.1111H39.2727V14.6667H46.6364C47.2873 14.6667 47.9117 14.9242 48.372 15.3826C48.8323 15.8411 49.0909 16.4628 49.0909 17.1111V39.1111ZM14.7273 19.5556V24.4444H24.5455V19.5556H14.7273ZM14.7273 9.77778V14.6667H24.5455V9.77778H14.7273Z"
          fill="black"
        />
      </svg>
    ),

    title: "Alexander Marthoma Memorial Hostel",
    description: `Are you looking for a safe place for your children to stay and study?
    The hostel has been functioning well in association with the school for the last six years.
    The opportunity for students to stay and study with improved facilities.
    Supervision of the children's extracurricular activities done by the teachers of the school itself.
    Special training is ensured in selected sports events for children who are interested in sports.
    Many national and state players have been produced from the hostel in the last six years.
    The hostel students are contributing to the school's forward momentum by creating excellent achievements in arts, sports and other curricular and extracurricular activities.
    `,
  },
];

const WeProvidePage = () => {
  const { loading } = useWeProvideFetch()
  return (
    <>
      {
        loading ?
          <LoadingSkeleton />
          :
          (
            <div className=" py-4 px-10 bg-gray-200 ">
              <h2 className="text-3xl text-black my-6 font-bold text-center">We Provide</h2>
              <div className="max-w-[1200px] mx-auto">
                {
                  items.map((item) => (
                    <ContainarItem key={item?.id} item={item} />
                  ))
                }
              </div>
            </div>
          )
      }
    </>

  );
};

export default WeProvidePage;
