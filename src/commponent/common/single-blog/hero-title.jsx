export default function HeroTitle({ herotitle }) { 
  return (
    <p className="text-sm font-medium text-white max-w-[152px] overflow-hidden text-ellipsis whitespace-nowrap">
      {herotitle}
    </p>
  );
}
