import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Hotels } from "./Hotels";
import { Users } from "./Users";

@Index("pk_hore_id", ["horeId"], { unique: true })
@Entity("hotel_reviews", { schema: "hotel" })
export class HotelReviews {
  @PrimaryGeneratedColumn({ type: "integer", name: "hore_id" })
  horeId: number;

  @Column("character varying", {
    name: "hore_user_review",
    nullable: true,
    length: 125,
  })
  horeUserReview: string | null;

  @Column("smallint", { name: "hore_rating", nullable: true })
  horeRating: number | null;

  @Column("timestamp without time zone", {
    name: "hore_created_on",
    nullable: true,
  })
  horeCreatedOn: Date | null;

  @ManyToOne(() => Hotels, (hotels) => hotels.hotelReviews, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "hore_hotel_id", referencedColumnName: "hotelId" }])
  horeHotel: Hotels;

  @ManyToOne(() => Users, (users) => users.hotelReviews, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "hore_user_id", referencedColumnName: "userId" }])
  horeUser: Users;
}
