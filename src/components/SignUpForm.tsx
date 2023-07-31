'use client';

import * as React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppDispatch } from '@/redux/hooks';
import { createUser } from '@/redux/features/user/userSlice';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;


interface Inputs {
  email: string;
  password: string;
}

export function SignupForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading] = React.useState<boolean>(false);

  // async function onSubmit(event: React.SyntheticEvent) {
  //   event.preventDefault();
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(createUser({ email: data.email, password: data.password }));
  };
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email", { required: 'Email is required' })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <Input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password", { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <Input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password", { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <Button disabled={isLoading}>
            {isLoading && <p>loading</p>}
            Create Account
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? <p>loading</p> : <p>GitHub</p>}
      </Button>
    </div>
  );
}
