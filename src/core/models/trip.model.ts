type Trip = {
  id?: number;

  departure: string;

  destination: string;

  departureTime: string;

  return?: boolean;

  returnTime?: string;

  passengerNumber: number;

  onBoard?: boolean;

  suppServices?: boolean;

  promo?: boolean;

  promoCode?: string;

  withNote?: boolean;

  tripNote?: string;

  userName?: string;

  email?: string;

  phone?: string;
};

export default Trip;