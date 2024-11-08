export interface  ButtonProps {
  content: string;
  classButton?: string;
  classContent?: string;
  showImage?: boolean;
}

export interface CardDescriptionProps {
  tilteCard?: string;
  nameCard?: string;
  descriptionCard?: string;
  titleCardIn1?: string;
}
export interface CardIconProps {
  tilteCard?: string;
  nameCard?: string;
  descriptionCard?: string;
  titleCardIn1?: string;
}

export interface CardPerson {
  tilteCard?: string;
  nameCard?: string;
  descriptionCard?: string;
  titleCardIn1?: string;
}

export interface CardStyleProps {
  tilteCard?: string;
  nameCard?: string;
  descriptionCard?: string;
  titleCardIn1?: string;
}


export interface CollapseItemProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}
export interface DetailCardProps {
  titleDetail: string;
  nameDetail: string;
  descriptionDetail: string;
  className?: string;
}
export interface DetailSectionProps  {
  titleSection: string;
  nameSection: string;
  descriptionSection: string;
  className?: string;
  responsive?: string;
  textPosition?: string;
}
export interface ImageCustomProps {
  src: string;
  alt?: string;
  className?:string;
}
export interface NavBarProps {
  useLogo?: boolean;
}
