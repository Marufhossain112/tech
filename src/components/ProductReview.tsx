
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useGetCommentQuery, usePostCommentMutation } from '@/redux/features/product/productApi';
interface IProps {
  id: string;
}
export default function ProductReview({ id }: IProps) {
  const { data } = useGetCommentQuery(id, { refetchOnMountOrArgChange: true, pollingInterval: 30000 });
  console.log('ima id', id);
  const [inputValue, setInputValue] = useState<string>('');
  const [postComment, { isError, isLoading, isSuccess }] = usePostCommentMutation();
  console.log(isError, isLoading, isSuccess);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const options = {
      id: id,
      data: { comment: inputValue }
    };
    postComment(options);
    console.log(inputValue);
    setInputValue('');
  };
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form action="#" onSubmit={handleSubmit}>
        <div className="flex gap-5 items-center">
          <Textarea onChange={handleChange} value={inputValue} className="min-h-[30px]" />
          <Button className="rounded-full h-10 w-10 p-2 text-[25px]">
            <FiSend />
          </Button>
        </div>
      </form>
      <div className="mt-10">
        {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
