import { CustomError, ResponsiveEntity, UserEntity } from "../../domain";

export class ResponsiveMapper {

  static responsiveEntityFromObject(object: { [key: string]: any }) {

    const { id, serial_number,
      brand,
      model,
      type,
      comment,
      is_signed,
      created_at,
      reference_number,
      assigner,
      approver,
      receiver,
    } = object

    return new ResponsiveEntity(
      id,
      serial_number,
      brand,
      model,
      type,
      comment,
      is_signed,
      created_at,
      reference_number,
      assigner,
      approver,
      receiver,
    )

  }

}