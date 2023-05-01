"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealSchema = exports.Meal = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Meal = class Meal {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Menu' }),
    __metadata("design:type", String)
], Meal.prototype, "menuId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: [true, 'Item title name is required!'],
        trim: true,
        unique: true,
    }),
    __metadata("design:type", String)
], Meal.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: [true, 'Description is required!'],
        trim: true,
        unique: true,
    }),
    __metadata("design:type", String)
], Meal.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: [true, 'Slug is required!'], trim: true, unique: true }),
    __metadata("design:type", String)
], Meal.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: [true, 'Image is required!'], trim: true }),
    __metadata("design:type", String)
], Meal.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: [true, 'Price is required!'], default: 0 }),
    __metadata("design:type", Number)
], Meal.prototype, "priceWithOffer", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: [true, 'Filter is required!'],
        trim: true,
        validate: {
            validator: function (val) {
                return ['veg', 'nonveg'].includes(val);
            },
            message: (props) => `${props.value} is incorrect. Please select one of these "veg" or "nonVeg"`,
        },
    }),
    __metadata("design:type", String)
], Meal.prototype, "filter", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Meal.prototype, "bestSeller", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Meal.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], Meal.prototype, "time", void 0);
Meal = __decorate([
    (0, mongoose_1.Schema)()
], Meal);
exports.Meal = Meal;
exports.MealSchema = mongoose_1.SchemaFactory.createForClass(Meal);
//# sourceMappingURL=meals.schema.js.map