import { Search } from "lucide-react";
import { ComponentProps } from "react";

interface InputPrefixProps extends ComponentProps<'div'> {}

export function Prefix(props : InputPrefixProps) {
    return <div {...props}/>
}

interface InputControlProps extends ComponentProps<'input'> {}

export function Control(props : InputControlProps) {
    return <input
    className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:placeholder-zinc-400 dark:text-zinc-100"
    {...props}
    />
}

interface InputRootProps extends ComponentProps<'div'> {}

export function Root(props : InputRootProps) {
    return(
        <div 
            className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20" 
            {...props}
        />
    )
}