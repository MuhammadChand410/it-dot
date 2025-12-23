export default function HeroTitle({ herotitle }) { 
  return (
    <p className={`text-sm font-medium text-gray-500 max-w-[152px] overflow-hidden text-ellipsis whitespace-nowrap`}>
      {herotitle} 
    </p>
  );
}
