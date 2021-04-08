export class CompanyModel {
  constructor(
    public id ?: number,
    public username ?: string,
    public password ?: string,
    public fullname ?: string,
    public email ?: string,
    public avatar ?: string,
    public roles ?: number[],
    public bio ?: string,
    public phone ?: string,
    public name ?: string,
    public category ?: string[],
    public company_type ?: string,
    public photos ?: string[],
    public description ?: string,
    public preparation_time ?: string,
    public delivery ?: string,
    public open_company ?: boolean,
    public menu ?: MenuModel[],
    public work_time ?: WorkTimeModel[],
  ) {}
}

export class MenuModel {
  constructor(
    public menu_id ?: string,
    public type ?: MenuTypeModel,
    public food ?: FoodModel[] 
  ) {}
}

export class MenuTypeModel {
  constructor(
    public id ?: number,
    public type ?: string,
    public icon ?: string,
    public showInHeader ?: boolean,
    public cover_photo ?: string
  ){}
}

export class FoodModel {
  constructor(
    public food_id ?: string,
    public food_name ?: string,
    public food_photo ?: string,
    public food_price ?: number,
    public food_ingredients ?: Ingredient[],
    public food_type ?: string,
    public food_packaging ?: string,
    public food_comment ?: string,
    public food_options ?: string[],
    public food_additions ?: string[],
    public food_quantity ?: number   
  ) {}
}

export class Ingredient {
  constructor( public name: string) {
  }
}

export class WorkTimeModel {
  constructor(
    public work_time_id ?: string,
    public day ?: string,
    public from_hour ?: string,
    public to_hour ?: string,
    public is_active ?: boolean
  ) {}
}

export class Ads {
  constructor(
    public id ?: number,
    public name ?: string,
    public description ?: string,
    public photo ?: string,
    public cover_photo ?: string
  ) {}
}

export class MediaImage {
  constructor(
    public name ?: string,
    public bytedata ?: string,
    public needresize ?: boolean,
    public blobname ?: string,
    public documentblob ?: string,
    public documenturl ?: string,
    public type ?: string,
    public resizewidth ?: number,
    public resizeheight ?: number
  ) {}
}

export class DeliveryModel {
  constructor(
    public id ?: number,
    public company_name ?: string,
    public company_photo ?: string,
    public open_company ?: boolean,
    public delivery_cars ?: CarsModel[]
  ) {}
}

export class CarsModel {
  constructor(
    public car_id ?: number,
    public car_number ?: number,
    public model ?: string,
    public manufacturer ?: string,
    public model_year ?: number,
    public mileage ?: number,
    public description ?: string,
    public color ?: string,
    public price ?: string,
    public delivery_status ?: string
  ) {}
}

// export class OrdersModel {
//   constructor(
//     public order_id ?: string,
//     public address_from ?: string,
//     public address_to ?: string,
//     public time_delivery ?: string,
//     public delivery_price ?: number,
//     public delivery_total ?: number,
//     public order_item ?: OrderItem[],
//     public payment ?: string[],
//     public total_items ?: number
//   ) {}
// }

export class OrderItem {
  constructor(
    public item_id ?: number,
    public item_name ?: string,
    public item_quantity ?: number,
    public item_price ?: number,
  ) {}
}

export class OrdersModel {
  constructor(
    public order_id ?: number,
    public origin_name ?: string,
    public origin_latitude ?: number,
    public origin_longitude ?: number,
    public destination_name ?: string,
    public destination_latitude ?: number,
    public destination_longitude ?: number,
    public time_delivery ?: string,
    public delivery_price ?: number,
    public delivery_total ?: number,
    public order_item ?: OrderItem[],
    public payment ?: string[],
    public total_items ?: number
  ) {}
}
export class OriginModel {
  constructor(
    public origin_id ?: number,
    public origin_name ?: string,
    public latitude ?: string,
    public longitude ?: string,
  ) {}
}

export class DestinationModel {
  constructor(
    public destination_id ?: number,
    public destination_name ?: string,
    public latitude ?: string,
    public longitude ?: string,
  ) {}
}
