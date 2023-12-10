import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useMemo } from "react";
import AssistantIcon from "@mui/icons-material/Assistant";
import Post from "../components/Post";
import { useSelector } from "react-redux";
import { getPosts } from "../redux/postSlice";
import AddPost from "../components/AddPost";
import useLazyFetch from "../hooks/useLazyFetch";
import Avatar from '@mui/material/Avatar';
import FavouriteCategories from "../components/FavouriteCategories/FavouriteCategories";
import TopCategories from "../components/TopCategories";
import { Hidden } from "@mui/material";
import BannerSlides from "../components/BannerSlides";
import MostViewedCategories from "../components/MostViewedCategories";
import NewsGrid from "../components/News/NewsGrid";
import ProductGrid from "../components/ProductCategories/ProductGrid";

export default function Home() {
  const { status, posts } = useSelector((state) => state.post);
  const { loading, loadMoreRef } = useLazyFetch(getPosts);

  const renderedPostList = useMemo(() => (
    posts.map((post) => (
      <Post key={post._id.toString()} post={post} />
    ))
  ), [posts]);

  return (
    <>
      <FavouriteCategories deviceType="desktop" sx={{ marginBottom: 2, border: '1px solid #ccc', boxShadow: 'none' }} />
      <Grid container justifyContent="space-between" alignItems="center">

        <Grid item sx={{ border: '1px solid #ccc', boxShadow: 'none', marginBottom: 5, display: "flex-row" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Hidden mdDown>
              <div style={{ display: "flex", flexDirection: "column", padding: "2.5%" }}>
                <TopCategories />
              </div>
            </Hidden>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <BannerSlides />
            </div>



          </div>

        </Grid>

        {/* <Grid item xs={12} md={8} sx={{ marginBottom: 5, border: '1px solid #ccc', boxShadow: 'none' }}>
          
        </Grid> */}
        <Grid item xs={12} md={12} sx={{ marginBottom: 5, border: '1px solid #ccc', boxShadow: 'none' }}>
          <MostViewedCategories />
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginBottom: 5, border: '1px solid #ccc', boxShadow: 'none' }}>
          <NewsGrid />
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginBottom: 5, border: '1px solid #ccc', boxShadow: 'none' }}>
          <ProductGrid />
        </Grid>

      </Grid>
      {/* <Hidden mdDown>
        <Footer />
      </Hidden> */}
    </>
  );
}
