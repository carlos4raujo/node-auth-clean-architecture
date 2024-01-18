
export class CreateResponsiveDto {

  private constructor(
    public device_id: string,
    public brand: string,
    public serial_number: string,
    public model: string,
    public description: string,
    public assigner_id: string,
    public receiver_id: string,
    public location_id: string,
  ) {}

  static create(object: {[key: string]: any}): [string?, CreateResponsiveDto?] {

    const {       
      device_id,
      brand,
      serial_number,
      model,
      description,
      assigner_id,
      receiver_id,
      location_id 
    } = object

    if(!device_id) return ['Missing device_id']
    if(!brand) return ['Missing brand']
    if(!serial_number) return ['Missing serial_number']
    if(!model) return ['Missing model']
    if(!description) return ['Missing description']
    if(!assigner_id) return ['Missing assigner_id']
    if(!receiver_id) return ['Missing receiver_id']
    if(!location_id) return ['Missing location_id']

    return [undefined, new CreateResponsiveDto(
      device_id,
      brand,
      serial_number,
      model,
      description,
      assigner_id,
      receiver_id,
      location_id 
    )]
  }

}