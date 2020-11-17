exports.addCategory = (req,res)=>{
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name),
      };
    
      if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId;
      }
    
      const cat = new category(categoryObj);
      cat.save((error, category) => {
        if (error) return res.status(400).json({ error });
    
        if (category) {
          return res.status(201).json({ category });
        }
      });
}