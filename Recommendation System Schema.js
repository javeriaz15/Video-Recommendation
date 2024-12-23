const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema(
    {
    // user id
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },

    //age
    age: {
        bYear: {
            type: Number,
            required: true,
            trim: true,
        },
        bMonth: {
            type: String,
            required: true,
            trim: true,
        },
        bDay: {
            type: Number,
            required: true,
            trim: true,
        },
        },

    ageGroup: {
        type: String, // (18-24, 25-30, 30-45, above 45)
    },

    //location
    location: {
        country: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        province: {
            type: String,
        },
        postcode: {
            type: String,
        },
        },

    deviceType: {
        // mobile, tablet, desktop
        type: String,
    },

    deviceMetrics: {
        screenResolution: { type: String }, // e.g., "1920x1080"
        appVersion: { type: String }, // e.g., "1.0.0"
        browser: { type: String }, // e.g., "Chrome"
    },

    session: {
        sessionId: { type: String }, // Unique session ID
        duration: { type: Number }, // Duration in seconds
        startTime: { type: Date }, // Session Start Time
        endTime: { type: Date }, // Session end time
    },

    //Session Tracking
    /*sessionId: {
        type: String,
    },*/
    
    // user's friends list by their userId's
    /*relaters: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        },
    ],*/
    // relater is for second iteration 


    // VIDEO RELATED FIELDS
    //video link
    video: {
        type: String,
    },
    videoType: {
      // challenge, challenged, cover
        type: String,
    },
    // length of the video in milliseconds
    videoDuration: {
        type: Number, 
    },

    //genre
    genre: String,

    interactions: {
        watched: { type: Number, default: 0 }, // 0-1, derived from GA4 `video_progress`
        liked: { type: Boolean, default: false }, // Derived from GA4 `video_like`
        skipped: { type: Boolean, default: false }, // Derived from GA4 `video_skip`
    }


    // impact factor: { type:Number,}, // second iteration
    },

    {
    timestamps: true,
    }
);

const Recommendation = mongoose.model("Recommendation", recommendationSchema);
module.exports = Recommendation;
