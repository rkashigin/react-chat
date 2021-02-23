import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:123admin123@cluster0.6xzvi.mongodb.net/chat",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
