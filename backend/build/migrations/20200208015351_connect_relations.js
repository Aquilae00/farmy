"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequence = require("when/sequence");
function up(knex) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, knex.schema.dropTable("User")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.createTable("User", function (table) {
                            table.increments("id").primary();
                            table.string("username").unique();
                            table.string("first_name", 255).notNullable();
                            table.string("last_name", 255).notNullable();
                            table
                                .string("email", 255)
                                .notNullable()
                                .unique();
                            table.integer("phone_num", 255).notNullable();
                            table.integer("address_id").nullable();
                            table.foreign("address_id").references("Address.address_id");
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.dropTable("Request")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.createTable("Request", function (table) {
                            table.increments("offer_id").primary();
                            table.float("quantity").nullable();
                            table.string("units").nullable();
                            table
                                .integer("requester")
                                .unsigned()
                                .notNullable();
                            table.foreign("requester").references("User.id");
                            table.integer("produce").notNullable();
                            table.foreign("produce").references("Produce.produce_id");
                        })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.dropTable("Listing")];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.createTable("Listing", function (table) {
                            table.increments("offer_id").primary();
                            table.float("quantity").notNullable();
                            table.string("units").notNullable();
                            table.string("img_link").notNullable();
                            table.float("price").notNullable();
                            table.integer("lister").notNullable();
                            table.foreign("lister").references("User.id");
                            table.integer("produce").notNullable();
                            table.foreign("produce").references("Produce.produce_id");
                        })];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.dropTable("Produce")];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.createTable("Produce", function (table) {
                            table.increments("produce_id").primary();
                            table.string("name").unique();
                            table.integer("category").notNullable();
                            table.foreign("category").references("Category.category_id");
                        })];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, knex.schema
                    .alterTable("User", function (table) {
                    table.dropColumn("address_id");
                })
                    .alterTable("Request", function (table) {
                    table.dropColumn("requester");
                    table.dropColumn("produce");
                })
                    .alterTable("Listing", function (table) {
                    table.dropColumn("lister");
                    table.dropColumn("produce");
                })
                    .alterTable("Produce", function (table) {
                    table.dropColumn("category");
                })];
        });
    });
}
exports.down = down;
