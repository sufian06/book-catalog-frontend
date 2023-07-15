import { FiSend } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const dummyComments = [
  "Bhalo na",
  "Ki shob ghori egula??",
  "Eta kono product holo ??",
  "200 taka dibo, hobe ??",
];

export default function ProductReview() {
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5 items-center">
        <Textarea className="min-h-[30px]" />
        <Button className="rounded-full h-10 w-10 p-2 text-[25px]">
          <FiSend />
        </Button>
      </div>
      <div className="mt-10">
        {dummyComments.map((comment, index) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://media.istockphoto.com/id/1389898060/photo/young-support-woman-cute-iconic-character-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=WvxoxUOZb4CFEAquDEJwmeMATDcdbe1ewcX3C5ClfJw=" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
